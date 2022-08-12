import $ from "jquery";
import * as bootstrap from "bootstrap";
import select2 from "select2";
import "@accessible360/accessible-slick";

export const initializeUtills = () => {
  // initialize 'bootstrap' tooltips
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // initialize 'bootstrap' popovers
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );

  // initialize 'select2'
  select2($);
  $(`select`).select2({
    minimumResultsForSearch: Infinity,
    theme: "default",
  });
};
