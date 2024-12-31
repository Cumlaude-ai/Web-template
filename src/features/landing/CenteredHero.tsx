export const CenteredHero = (props: {
  banner: React.ReactNode;
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}) => (
  <>
    <div className="text-center absolute left-[45%] mt-24">{props.banner}</div>

    <div className="text-center text-5xl font-bold text-white tracking-tight absolute mt-40">
      {props.title}
    </div>

    <div className="mx-auto max-w-screen-md text-center text-white text-xl text-muted-foreground absolute mt-72 left-[20%]">
      {props.description}
    </div>

    <div className="flex justify-center gap-x-5 gap-y-3 max-sm:flex-col absolute mt-96 left-[40%]">
      {props.buttons}
    </div>
  </>
);
