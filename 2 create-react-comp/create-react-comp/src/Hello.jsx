function Hello(){

  let myName='Nigam';
  let number = 456;
  let fullName = () => {
    return 'Nigam Kumar';
  }
  return <p>
    MessageNo: {number }.I am your master {myName} {fullName()}
  </p>
}
export default Hello; 