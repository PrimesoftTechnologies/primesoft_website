import { RightIcon } from "../icons";
import BasicButton from "../basic-button";
import Image from "next/image";

const ActionBox = () => {
  return (
    <div className="grid w-full max-w-3xl justify-center gap-4 rounded-3xl border-3 border-secondary-200 bg-linear-to-r from-secondary-50 to-secondary-100 p-6 text-center sm:p-8">
      <div className="flex justify-center ">
        <Image
          src="/images/icons-container.svg"
          alt="Icons Container"
          width={200}
          height={40}
          className="h-auto w-40 sm:w-50"
        />
      </div>
      <div>
        <div className="text-xl font-bold sm:text-2xl">
          Ready to map the right solution for your business?
        </div>
        <div className="mt-2 text-sm text-gray-500 sm:text-base">
          We help you plan, implement, and support your Odoo and call center
          systems.
        </div>
      </div>
      <div className="grid justify-center">
        <BasicButton className=" bg-linear-to-r from-secondary-400 to-secondary-500 text-white hover:from-secondary-500 hover:to-secondary-400">
          Plan Your Implementation <RightIcon className="size-5" />
        </BasicButton>
      </div>
    </div>
  );
};
export default ActionBox;
