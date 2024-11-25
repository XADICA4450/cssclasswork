const allDeleteBtns = document.querySelectorAll(".dlt");

allDeleteBtns.forEach((btn) => {
  btn.addEventListener("click", function () {


    const productId = this.getAttribute("data-id");

    Swal.fire({
      title: "Are you sure to delete product!?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(productId, this);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  });
});


async function deleteProduct(id, btn) {
try {
  const response = await deleteDataById(endpoints.products, id);
  btn.closest("tr").remove();
} catch (error) {
  console.log(error);
}
}
