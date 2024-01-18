type Obj = {
    height: number;
    width: number;
    gender?: string;  // ? makes it optional so that it can be omitted if needed
};

const a: Obj = {
    height: 5,
    width: 6,
    gender:"male"
}

// here we didn't added gender property it will not give error
const b:Obj={
    height:5,
    width:6
}

// class in Typescript

interface c{
    height:number,
    weight:number,
    gender:string
}

// interface supports inheritence and you cann add new property to instance of this type
interface newC extends c{
    age:number
}

class main{
    height:number;
    private weight:number;
    constructor(height:number,weight:number){
        this.height=height;
        this.weight=weight;
    }

}


const obj=new main(5,6);
console.log(obj.height);
// console.log(obj.weight);  // it will give error as weight is private