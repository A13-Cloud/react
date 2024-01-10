

function Tabs ({buttons, children, ButtonsContainer = "menu"}) {

  // 15.000 + 15.000 + 20.000 + 25.000 + 10.000

  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;