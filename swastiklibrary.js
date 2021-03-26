//to check whether two objects are touching each other or not
function isTouching(obj1, obj2)
{
  if (obj2.x - obj1.x < obj2.width / 2 + obj1.width / 2 && 
    obj1.x - obj2.x < obj2.width / 2 + obj1.width / 2 && 
    obj1.y - obj2.y < obj2.height / 2 + obj1.height / 2 && 
    obj2.y - obj1.y < obj2.height / 2 + obj1.height / 2) 
  {
    return true;
  }
}


//to bounce both the object if they touch each other
function bounceOff(obj1, obj2)
{
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
        && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
       obj1.velocityX = obj1.velocityX * (-1);
       obj2.velocityX = obj2.velocityX * (-1);
       return true;
    }

    if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
      obj1.velocityY = obj1.velocityY * (-1);
      obj2.velocityY = obj2.velocityY * (-1);
      return true;
    }
}


//to bounce only one object(obj1) if it touch the other object(obj2)
function bounce(obj1, obj2)
{
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
        && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
       obj1.velocityX = obj1.velocityX * (-1);
       return true;
    }

    if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
      obj1.velocityY = obj1.velocityY * (-1);
      return true;
    }
}