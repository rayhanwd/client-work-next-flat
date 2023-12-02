import TextInput from "@/app/ui/textInput/TextInput";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next flat | create a new ad",
  description: "",
};
export default function CreateAnads() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <h2>Create a new ads</h2>
            <p>
              Welcome to our form where you add as much information as need
              about your property
            </p>
          </div>
          {/* Mobile and address */}
          <div className="flex items-center">
            <TextInput />
            <TextInput />
            <p>
              Please enter your email address and phone number to not lose your
              progress
            </p>
          </div>
          {/* Localization */}
          <div>
            <h2>Localization</h2>
            <div className="flex items-center">
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
            </div>
            <p>5.354708943431563,-3.9874719330168893</p>
            <button>Edit</button>
            {/* check box , Share the exact localization */}
            <input type="checkbox" name="" id="" />
            <span>Share the exact localization</span>
          </div>
        </div>
      </section>
    </>
  );
}
