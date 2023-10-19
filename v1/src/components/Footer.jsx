const Footer = () => {
  return (
    <footer className="bg-[#333333] px-2 py-10">
      <div className="wrapper mx-auto max-w-[75rem] text-center">
        <p className="sample-text text-white text-[14px]">
          Sample text. Click to select the Text Element.
        </p>
        <p className="copyright text-white mt-[72px] text-[12.8px]">
          <a href="" className="text-[#e9ade0] underline">
            Website Templates
          </a>{" "}
          created with{" "}
          <a href="" className="text-[#e9ade0] underline">
            WYSIWYG HTML Editor.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
