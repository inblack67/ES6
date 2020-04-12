const object = {
    name: 'A-Man',
    greet: function(){
        console.log('I am groot');
        console.log(this)
    }
}

// object.greet();
const obj = {...object}
// obj.greet();

// standalone ref/outsider
// this - window object
const obj2 = object.greet;
obj2()

// in js, fns are also objects
// new instance of objectfn is created here
const obj3 = object.greet.bind(object)
obj3();


// // arrows and this
// // Arrows don't re-bind this

const person = {
    name: 'A-Man',
    intro: function(){

        const self = this;
        // self has access to person object, even in the callback fn's body

        setTimeout(function() {
            console.log(self); // ok
            // console.log(this); // window
        }, 1000);

        // setTimeout(() => {
        //     console.log(this);
        // }, 1000);
    }
}

person.intro();