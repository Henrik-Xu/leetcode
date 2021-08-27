/**
 * Throne Inheritance
 */
/**
 * @param {string} kingName
 */
var ThroneInheritance = function(kingName) {
  this.king = kingName;
  this.dead = new Map();
  this.map = new Map();
  this.map.set(kingName, []);
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
  this.map.get(parentName).push(childName);
  this.map.set(childName, []);
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
  this.dead.set(name, true);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
  const dfs = (root, curOrder) => {
    if (!this.dead.has(root)) {
      curOrder.push(root);
    }
    for (const child of this.map.get(root)) {
      dfs(child, curOrder);
    }
    return curOrder;
  };
  return dfs(this.king, []);
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
