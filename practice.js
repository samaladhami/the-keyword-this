//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //it is an object constriction that does not have a value, the value of this when used in a function, is the object that owns the function, the value of this when used in an object, is the object itself

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //1- Whenever JavaScript’s call or apply method is used, this is explicitly defined.
      //2- Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
      //3- Whenever a function is called by a preceding dot, the object before that dot is this.
      //4- Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.

  // 3) What is the difference between call and apply?

      //Answer
      //the difference between call and apply . Both can be called on functions, which they run in the context of the first argument. In call the subsequent arguments are passed in to the function as they are, while apply expects the second argument to be an array that it unpacks as arguments for the called function.

  // 4) What does .bind do?

      //Answer
      //It is called on function prototype. This method creates a function whose body is similar to the function on which it is called but the 'this' refers to the first parameter passed to the bind method


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username:'mouied'
      , email:'mouied@gmail.com'
      , getUsername: function () {

        return this.username;

      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();
//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function (){
      return this.move += 10;

    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);



prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here

  var priusYear = getYear.bind(prius);
  console.log(priusYear());

  var mustangYear = getYear.bind(mustang);
  console.log(mustangYear());

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser);
console.log(userName)
//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
