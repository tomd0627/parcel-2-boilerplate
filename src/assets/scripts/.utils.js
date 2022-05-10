import $ from "jquery";
import * as bootstrap from "bootstrap";
import select2 from "select2";
import "@accessible360/accessible-slick";

// initialize bootstrap tooltips
let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// initialize bootstrap popovers
let popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// initialize 'select2'
select2($);
$(`select`).select2({
  minimumResultsForSearch: Infinity,
  theme: "default",
});
