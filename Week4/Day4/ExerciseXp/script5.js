class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  const doggo = new Dog("John");

  console.log(doggo);

// //1 - No
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };

// //2 - Yes
// class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

// 3c- No
// class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };

// //4 - No
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };



const doggo2 = new Labrador("david", "large");

console.log(doggo2);