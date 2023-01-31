$.ajax({
  type: "GET",
  url: "inventory.csv",
  dataType: "text",
  success: function(data) {
    let inventory = $.csv.toArrays(data);
    for (let i = 1; i < inventory.length; i++) {
      let brand = inventory[i][0];
      let model = inventory[i][1];
      let size = inventory[i][2];
      let buyPrice = inventory[i][3];
      let sellPrice = inventory[i][4];
      let tr = `<tr>
        <td>${brand}</td>
        <td>${model}</td>
        <td>${size}</td>
        <td>${buyPrice}</td>
        <td>${sellPrice}</td>
      </tr>`;
      $("#inventory-body").append(tr);
    }
  }
