import InputBox from "./components/inputBox";

function App() {
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/35251427/pexels-photo-35251427.jpeg')",
      }}
    >
      <InputBox />
    </div>
  );
}

export default App;