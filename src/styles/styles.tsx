// A bunch of common styles exported as  objects

/***********************
 * App.js
 ************************/
export const appWrapper = {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  };
  /***********************
   * Navigation
   ************************/
  
  export const searchBar = {
    display: 'flex',
    alignItems: 'center',
    width: 400,
    boxShadow: 0,
    border: '1px solid #ccc',
    borderRadius: 0,
    mr: 1,
  };
  
  export const appBar = {
    backgroundColor: 'white',
    color: '#000',
  };
  
  export const toolbarWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
  };
  
  export const logoText = {
    fontSize: 22,
    ml: 1,
    fontFamily: 'Oswald',
  };
  
  /***********************
   * SideList
   ************************/
  
  export const sideListWrapper = {
    width: '100%',
    bgcolor: 'background.paper',
    borderRight: '0px solid #ddd',
  };
  
  /***********************
   * Shorts
   ************************/
  export const shortsWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    my: 3,
  };
  
  export const shortsCard = { maxWidth: 200, boxShadow: 'none', mx: 2 };
  export const shortsHeader = { ml: 1, fontSize: 20, fontWeight: 'bold' };
  
  /***********************
   * Notification List
   ************************/
  export const notificationWrapper = {
    width: '100%',
    minWidth: 375,
    maxWidth: 375,
    maxHeight: 360,
    marginBottom: 8
  };
  
  /***********************
   * Card.js
   ************************/
  
  export const appCardList = {
    width: '100%',
    bgcolor: 'background.paper',
    p: 0,
    m: 0,
    maxWidth: '100%',
  };
  /***********************
   * AppContentArea
   ************************/
  export const appContentWrapper = {
    display: 'flex',
    mt: 8,
    width: '100vw',
    overflow: 'hidden',
  };
  
  /************************
   * General styles
   ************************/
  export const flexAlignCenter = {
    display: 'flex',
    alignItems: 'center',
  };
  
  export const flexColumnGrow = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  };
  
  export const flexColumnCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  
  export const inlineText = { display: 'inline', fontSize: 12 };
  
  export const flex = { display: 'flex' };
  
  export const scrollWrapper = {
    overflowY: 'scroll',
    '::-webkit-scrollbar': { height: '3px' },
  };
  export const hideOnMobile = { display: { xs: 'none', sm: 'flex' } };