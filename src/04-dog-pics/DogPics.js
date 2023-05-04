import { useEffect, useState } from "react";
//create function to fetch a dog pic
const getDogPic = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await response.json();
  // console.log(response.json().message);
  // console.log(dog.message);
  return dog.message;
};
export default function DogPics() {
  // API: https://dog.ceo/dog-api/

  //initialize and set component state
  const [dogPic, setDogPic] = useState("");
  useEffect(() => {
    //call getDogPic function, then update state of current dogPic value
    getDogPic().then((pic) => setDogPic(pic));
  }, []);
  return (
    <div className='dog-pics'>
      <img src={dogPic} alt='random dog pic' />
      {/* add eventListener to button, clicking asynchronously calls the setDogPic function which awaits the reponse from the result of the getDogPic function (fetching data from the API) */}
      <button onClick={async (e) => setDogPic(await getDogPic())}>🐶</button>
    </div>
  );
}
