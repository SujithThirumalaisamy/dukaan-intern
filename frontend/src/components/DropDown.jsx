import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({ options, currentRange, setCurrentRange }) {
  return (
    <Menu as="div" className="relative inline-block text-left dropdown">
      <div>
        <Menu.Button
          style={{ color: "#4D4D4D" }}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {currentRange}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ color: "#4D4D4D" }}
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            {options.map((option) => {
              return (
                <div onClick={() => setCurrentRange(option)} key={option}>
                  <Menu.Item key={option}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {option}
                      </a>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
