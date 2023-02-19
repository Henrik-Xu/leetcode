/**
 * Asteroid Collision
 */
 let asteroidCollision = function(asteroids) {
    let s = [];
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid=asteroids[i];
        if((s.length==0 && asteroid<0)||s[s.length-1]<0){
            s.push(asteroid);
        }else if(asteroid>0){
            s.push(asteroid);
        }else if(asteroid<0){
            let current = Math.abs(s.pop());
            if(current>Math.abs(asteroid)){
                s.push(current);
            }else if(current<Math.abs(asteroid)){
                i--;
            }else{
                continue;
            }
        }
        
    }
    return s;
};
let asteroids = [-2,-1,1,2];
let res = asteroidCollision(asteroids);
console.log(res);