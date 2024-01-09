

function Tabs ({buttons, children, ButtonsContainer}) {

  // 15.000 + 15.000 + 20.000 + 25.000:

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