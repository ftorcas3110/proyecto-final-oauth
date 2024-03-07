import {
  loginGoogle,
  loginGithub,
  loginTwitch,
  loginSpotify,
} from "@/lib/actions";

function OAuthForm() {
  return (
    <form className="container flex flex-col items-center gap-4  p-8 rounded-md ">
      <div className="flex flex-row gap-10 mt-4">
        <button
          formAction={loginGoogle}
          className="bg-center bg-[url('/google.svg')] bg-no-repeat h-20 md:rounded-xl md:w-28 sm:w-[5rem] cursor-pointer bg-white hover:bg-black py-2 px-4 rounded"
        ></button>
        <button
          formAction={loginGithub}
          className="bg-center bg-[url('/github.svg')] bg-no-repeat h-20 md:rounded-xl md:w-28 sm:w-[5rem] cursor-pointer bg-green-600 hover:bg-green-800 py-2 px-4 rounded"
        ></button>
        <button
          formAction={loginTwitch}
          className="bg-center bg-[url('/twitch.svg')] bg-no-repeat h-20 md:rounded-xl sm:rounded-[50%] md:w-28 sm:w-[5rem] cursor-pointer bg-purple-600 hover:bg-purple-800 rounded"
        ></button>
        <button
          formAction={loginSpotify}
          className="bg-center bg-[url('/spotify.svg')] bg-no-repeat h-20 md:rounded-xl sm:rounded-[50%] md:w-28 sm:w-[5rem] cursor-pointer bg-gray-800 hover:bg-gray-900 rounded"
        ></button>
      </div>
    </form>
  );
}

export default OAuthForm;
