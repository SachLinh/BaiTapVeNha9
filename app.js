function bai11(){
  var chuoi = document.getElementById('numB11').value;
  var n = chuoi.length;
  var dem =0;
  for(let i =0; i<n; i++)
  {
      if(chuoi[i] == " ")
      {
         dem++;
      }
  }
  document.getElementById('ketquaB11').value = dem;
}
function bai12(){
  var chuoi = document.getElementById('numB12').value;
  chuoi = chuoi.split(" ").join("");
  document.getElementById('ketquaB12').value = chuoi;
}
function bai13(){
  var chuoi = document.getElementById('numB13').value;
  chuoi = chuoi.split(" ");
  chuoi = chuoi.reverse();
  var n = chuoi.length;
  for(let i =0; i<n; i++)
  {
      chuoi[i] = chuoi[i].split("");
      chuoi[i] = chuoi[i].reverse();
      chuoi[i] = chuoi[i].join("");
  }
  chuoi = chuoi.join(" ");
  document.getElementById('ketquaB13').value = chuoi;
}
function bai14(){
  var chuoi1 = document.getElementById('numB14_1').value;
  var chuoi2 = document.getElementById('numB14_2').value;
  chuoi1 = chuoi1.split(" ");
  chuoi2 = chuoi2.split(" ");
  var n = chuoi1.length;
  var x;
  for(let i =0; i<n; i++)
  {
      if(chuoi1[i] == chuoi2[0])
      {
        x = i;
      }
  }
  if(x > 0)
  {
    document.getElementById('ketquaB14').value = x + 1;
  }
  else{
    document.getElementById('ketquaB14').value = "Chuoi s2 khong co trong chuoi s1";
  }
}
function bai15(){
  var chuoi = document.getElementById('numB15').value;
  chuoi = chuoi.toLowerCase();
  chuoi = chuoi.split("");
  var n = chuoi.length;
  for(let i =0; i<n; i++)
  {
     if(i == 0)
     {
         chuoi[i] = chuoi[i].toUpperCase();
     }
     if(chuoi[i] == " ")
     {
         chuoi[i + 1] = chuoi[i + 1].toUpperCase();
     }
  }
  chuoi = chuoi.join("");
  document.getElementById('ketquaB15').value = chuoi;
}
function bai16(){
  var chuoi = document.getElementById('numB16').value;
  chuoi = chuoi.split("");
  var n = chuoi.length;
  var chuoi2 = "";
  for(let i =n - 1; i>=0; i--)
  {
     if(chuoi[i] == '/')
     {
       chuoi2 += chuoi.slice(i + 1, n).join("");
       break;
     }
  }
  document.getElementById('ketquaB16').value = chuoi2;
}
function bai18(){
  var chuoix = document.getElementById('numB18_x').value;
  var chuoiy = document.getElementById('numB18_y').value;
  var n = chuoix.length;
  chuoix = chuoix.split(" ");
  chuoiy = chuoiy.split(" ");
  var chuoiao = "";
  for(var i = n - 1 ;i>=0; i--)
  {
    if(chuoix[i] == chuoiy[0])
    {
      for(var j =i-1; j>=0; j--)
      {
        if(chuoix[j] == chuoiy[0])
        {
          for(let z = 0; z<j; z++)
          {
            chuoiao += chuoix[z].toString() + " ";
          }
        }
      }
    }
  }
  var m = chuoiao.length;
  if(m > 0)
  {
     document.getElementById('ketquaB18').value = m;
  }
  else {
       document.getElementById('ketquaB18').value = "Chuoi Y ko co trong X hoac xuat hien 1 lan";
  }
 
}