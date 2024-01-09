

function Tabs ({buttons, children}) {

  // 15.000 + 15.000 + 20.000 + 25.000:

  return (
    <>
      <menu>
        {buttons}
      </menu>
      {children}
    </>
  );
}

export default Tabs;