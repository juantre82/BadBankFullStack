function Balance() {
  const ctx = React.useContext(UserContext);
  return (
  <Card
    bgcolor="dark"
    header="Balance"
    body={ (  
            <>
            
            <h5>Balance: $
            {JSON.stringify(ctx.users[0].balance)}
            </h5>

            </>
          
            
          )}
  />
         )

}