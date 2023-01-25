export const getNavClass = (open: boolean): string => {
  return `md:flex md:gap-12 w-full  md:items-center md:static md:w-auto  py-5 md:p-0 transition-all duration-500 px-2 left-0 ease-in absolute md:z-auto z-[-1]  ${
    open ? "top-12" : "top-[-490px]"
  }`;
};
