var redis = require('redis'),
    commands = require("./commands");

var RedisNamespaceClient = function(prefix, redis) {
  this.redis = redis;
  this.prefix = prefix;
}

RedisNamespaceClient.prototype.on = function(event,listener) {
  var me = this;
  if(event == 'message') { // Strip the prefix from the channel on messages
    return this.redis.on.call(this.redis,event,function(channel,message) {
      channel = commands.stripKey(me.prefix,channel);
      listener(channel,message);
    });
  } else {
    return this.redis.on.call(this.redis,event,listener);
  }
}

// Add the commands to the prototype
Object.keys(commands.Commands).forEach(function(method_name) {
  RedisNamespaceClient.prototype[method_name] = function() {
    var command = new commands.Commands[method_name](this.prefix);
    var args = command.conditionArguments.apply(command,arguments);
    return this.redis[method_name].apply(this.redis,args);
  };
});

exports.createClient = function(prefix, host, port) {
  return new RedisNamespaceClient(prefix, redis.createClient(host, port));
};