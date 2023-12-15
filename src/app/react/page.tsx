import MyButton from "@/components/ReactLearning/button";
import AboutPage from "@/components/ReactLearning/aboutPage";
import Profile from "@/components/ReactLearning/Profile";
import ConditionalRendering from "@/components/ReactLearning/conditionalRendering";
import ShoppingList from "@/components/ReactLearning/RenderingList";
const ReactLearning = () => {
  const user = {
    name: "Mian Muhammad Bodla",
    role: "Admin",
  };
  return (
    <div className="flex flex-col gap-5">
      ReactLearning
      <div className="border bg-gray-900 p-2">
        <MyButton />
      </div>
      <div className="bg-gray-800 p-2">
        About (Fragment Tag)
        <AboutPage />
      </div>
      <div className="bg-green-700 p-5">
        User Information (variable print)
        <div>
          User Name : {user.name}
          User Role : {user.role}
        </div>
      </div>
      <div className=" flex justify-center items-center py-5">
        <Profile />
      </div>
      <div className="bg-gray-900 py-5">
        Conditional Rendering
        <ConditionalRendering />
      </div>
      <div className="bg-red-800 p-5">
        Rendering List
        <ShoppingList />
      </div>
    </div>
  );
};
export default ReactLearning;