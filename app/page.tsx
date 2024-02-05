import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gapp-y-4">
      <div>
      This is Screen just for Authentication
      </div>
      <div>
        <UserButton/>
      </div>
     
    </div>
  );
}
