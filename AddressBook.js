class AddressBook {
    //constructor
    constructor(firstName,lastName,address,city,state,zipCode,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString(){
        return "[ First Name: "+this.firstName+", Last Name: "+this.lastName+", Address: "+this.address+
                ", City: "+this.city+", State: "+this.state+", Zip Code: "+this.zipCode+", Phone Number: "+
                this.phoneNumber+", Email: "+this.email+" ]";

    }
}

let addressbook = new AddressBook("Niharika","Gowda","Balehonnur","Chikmagalur","Karnataka",577112,
                    8277587802,"niharikagowda1996@gmail.com");
console.log(addressbook.toString());