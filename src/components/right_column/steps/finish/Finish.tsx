import CheckMark from "../../../svg's/finish/Check";
export default function Finish() {
  return (
    <>
      <div className="grid  text-center place-content-center place-items-center w-full h-full">
        <CheckMark />
        <article className="max-w-xs">
          <h1 className="text-2xl font-bold text-blue-marine my-6">
            Thank you!
          </h1>
          <p className="text-gray-cool">
            Thanks for confirming your subscription! We hope you have fun using
            our plataform. If you ever need support, please feel free to email
            us at support@loremgaming.com.
          </p>
        </article>
      </div>
    </>
  );
}
