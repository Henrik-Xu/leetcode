/**
 * Sort the People
 */
var sortPeople = function(names, heights) {
    let map=[];
    for (let i = 0; i < names.length; i++) {
        map.push(new PeoplePair(names[i],heights[i]));
    }
    map.sort((a,b)=>{
        return b.height-a.height;
    });
    let res=[];
    for (let i = 0; i < map.length; i++) {
        res.push(map[i].name);
    }
    return res;
};
function PeoplePair(name,height){
    this.name=name;
    this.height=height;
}
    
