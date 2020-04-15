function connectAccess() {
    const adoConn = new ActiveXObject("ADODB.Connection");

    const adoRs = new ActiveXObject("ADODB.Recordset");

    adoConn.Open("Provider=Microsoft.ACE.OLEDB.12.0;Data Source= C:\\Эвотор\\evo_new.accdb");
    adoRs.Open("barcodes", adoConn, 1, 3);
    let myData = adoRs.GetString();
    console.log(myData);

    adoRs.Update();
    
    adoRs.Close();
    adoConn.Close();

}
connectAccess();