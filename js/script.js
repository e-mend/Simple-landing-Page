const msgNodeList = document.querySelector('#msg');
const btnNodeList = document.querySelector('.button');

function Click() {
  if (!msgNodeList.style.display || msgNodeList.style.display === 'none') {
    document.querySelector('#msg').style.display = 'block';

    
  } else {
    document.querySelector('#msg').style.display = 'none';

    
  }
};
//open #buy

const warnNodeList = document.getElementById('warning');

function Close() {
  if (warnNodeList.style.display === 'none') {
    warnNodeList.style.display = 'block';

    
  } else {
    warnNodeList.style.display = 'none';

    
  }
};
//close #warning













