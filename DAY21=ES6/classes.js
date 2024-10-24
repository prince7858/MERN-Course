/////////// classes  /////////////

class Animal{
    #color // private field

    constructor(name,sound,rang = "Black"){     // here color have a default value.
        this.name = name
        this.sound = sound
        this.#color = rang
    }

    tellSound(){
        console.log(`${this.name} makes a ${this.sound} sound and have ${this.#color} color`);
        
    }

    getColor(){
        return this.#color
    }
     
    setColor(rang){
        this.#color = rang
    }


    }  

    let dog = new Animal("Dog","Bark","Brown")

    // console.log(dog);
    // dog.tellSound()
    // console.log(dog.#color);  // private field
    // console.log(dog.getColor())
    // dog.#color = "Red"

    // dog.sound = "bhow"
    // console.log(dog);
    // dog.tellSound()
    
    console.log(dog.setColor("red"));
    console.log(dog.getColor())

    