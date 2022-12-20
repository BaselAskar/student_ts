class Student {
  constructor(private _id:number,private _name:string,private _birthDay:string,private _country:string,private _city:string ){}

  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }

  get birthDay(){
    return this._birthDay;
  }


  get country(){
    return this._country;
  }


  get city(){
    return this._city;
  }


  get age(){
    const birthDate = new Date(this.birthDay);

    const now = new Date();

    return now.getFullYear() - birthDate.getFullYear();
  }

}

export default Student;