// HELPERS

// Generate the key for the namespace
generateKey = exports.generateKey = function(prefix,key) {
  return prefix + ":" + key;
}

// Removes the key for the namesapce
stripKey = exports.stripKey = function(prefix,key) {
  return key.substring(prefix.length + 1,key.length);
}

// ALL KEYS
var AllKeys = function(prefix) { //every argument to a function is a key
  this.prefix = prefix;
}

AllKeys.prototype.conditionArguments = function() {
  for(var i = 0; i < arguments.length; ++i) {
    arguments[i] = generateKey(this.prefix,arguments[i]);
  };
  return arguments;
}

// NO KEYS
var NoKeys = function(prefix) { //no argument to a function is a key
  this.prefix = prefix;
}

NoKeys.prototype.conditionArguments = function() {
  return arguments;
}

// TODO: Implement these
var FirstKey = null;//the first argument to a function is a key
var LastKey = null;//the last argument to a function is a key
var NotFirstKey = null;//everything but the first argument to a function is a key
var NotLastKey = null;//everything but the last argument to a function is a key
var OddsKey = null;//odd numbered arguments to a function are keys
var DontKnow = null;//have't represented this key pattern yet

exports.Commands = {
    "append" : FirstKey,
    "auth" : NoKeys,
    "bgrewriteaof" : NoKeys,
    "bgsave" : NoKeys,
    "blpop" : NotLastKey,
    "brpop" : NotLastKey,
    "brpoplpush" : NotLastKey,
    "config get" : NoKeys,
    "config set" : NoKeys,
    "config resetstat" : NoKeys,
    "dbsize" : NoKeys,
    "debug object" : FirstKey,
    "debug segfault" : NoKeys,
    "decr" : FirstKey,
    "decrby" : FirstKey,
    "del" : AllKeys,
    "discard" : NoKeys,
    "echo" : NoKeys,
    "exec" : NoKeys,
    "exists" : FirstKey,
    "expire" : FirstKey,
    "expireat" : FirstKey,
    "flushall" : NoKeys,
    "flushdb" : NoKeys,
    "get" : FirstKey,
    "getbit" : FirstKey,
    "getrange" : FirstKey,
    "getset" : FirstKey,
    "hdel" : FirstKey,
    "hexists" : FirstKey,
    "hget" : FirstKey,
    "hgetall" : FirstKey,
    "hincrby" : FirstKey,
    "hkeys" : FirstKey,
    "hlen" : FirstKey,
    "hmget" : FirstKey,
    "hmset" : FirstKey,
    "hset" : FirstKey,
    "hsetnx" : FirstKey,
    "hvals" : FirstKey,
    "incr" : FirstKey,
    "incrby" : FirstKey,
    "info" : NoKeys,
    "keys" : FirstKey,
    "lastsave" : NoKeys,
    "lindex" : FirstKey,
    "linsert" : FirstKey,
    "llen" : FirstKey,
    "lpop" : FirstKey,
    "lpush" : FirstKey,
    "lpushx" : FirstKey,
    "lrange" : FirstKey,
    "lrem" : FirstKey,
    "lset" : FirstKey,
    "ltrim" : FirstKey,
    "mget" : AllKeys,
    "monitor" : NoKeys,
    "move" : FirstKey,
    "mset" : OddsKey,
    "msetnx" : OddsKey,
    "multi" : NoKeys,
    "object" : NoKeys,
    "persist" : FirstKey,
    "ping" : NoKeys,
    "psubscribe" : NoKeys,
    "publish" : NoKeys,
    "punsubscribe" : NoKeys,
    "quit" : NoKeys,
    "randomkey" : NoKeys,
    "rename" : AllKeys,
    "renamenx" : AllKeys,
    "rpop" : FirstKey,
    "rpoplpush" : AllKeys,
    "rpush" : FirstKey,
    "rpushx" : FirstKey,
    "sadd" : FirstKey,
    "save" : NoKeys,
    "scard" : FirstKey,
    "sdiff": AllKeys,
    "sdiffstore" : AllKeys,
    "select" : NoKeys,
    "set" : FirstKey,
    "setbit" : FirstKey,
    "setex" : FirstKey,
    "setnx" : FirstKey,
    "setrange" : FirstKey,
    "shutdown" : NoKeys,
    "sinter" : AllKeys,
    "sinterstore" : AllKeys,
    "sismember" : FirstKey,
    "slaveof" : NoKeys,
    "smembers" : FirstKey,
    "smove" : NotLastKey,
    "sort" : FirstKey,
    "spop" : FirstKey,
    "srandmember" : FirstKey,
    "srem" : FirstKey,
    "strlen" : FirstKey,
    "subscribe" : AllKeys,
    "sunion" : AllKeys,
    "sunionstore" : AllKeys,
    "sync" : NoKeys,
    "ttl" : FirstKey,
    "type" : FirstKey,
    "unsubscribe" : NoKeys,
    "unwatch" : NoKeys,
    "watch" : AllKeys,
    "zadd" : FirstKey,
    "zcard" : FirstKey,
    "zcount" : FirstKey,
    "zincrby" : FirstKey,
    "zinterstore" : DontKnow,
    "zrange" : FirstKey,
    "zrangebyscore" : FirstKey,
    "zrank" : FirstKey,
    "zrem" : FirstKey,
    "zremrangebyrank" : FirstKey,
    "zremrangebyscore" : FirstKey,
    "zrevrange" : FirstKey,
    "zrevrangebyscore" : FirstKey,
    "zrevrank" : FirstKey,
    "zscore" : FirstKey,
    "zunionstore" : DontKnow
};
