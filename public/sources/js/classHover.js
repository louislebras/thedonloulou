$(".container-hover-loulou").hover(
  function () {
    $(".container-image-hover-heading").addClass("hover-donloulou");
  },
  function () {
    $(".container-image-hover-heading").removeClass("hover-donloulou");
  }
);

$(".link-stamina").hover(
  function () {
    $(".container-img-links-heading").addClass("appear-image-heading-stamina");
  },
  function () {
    $(".container-img-links-heading").removeClass(
      "appear-image-heading-stamina"
    );
  }
);

$(".link-emk").hover(
  function () {
    $(".container-img-links-heading").addClass("appear-image-heading-emk");
  },
  function () {
    $(".container-img-links-heading").removeClass("appear-image-heading-emk");
  }
);

$(".link-openai").hover(
  function () {
    $(".container-img-links-heading").addClass("appear-image-heading-openai");
  },
  function () {
    $(".container-img-links-heading").removeClass(
      "appear-image-heading-openai"
    );
  }
);

$(".link-memoriae").hover(
  function () {
    $(".container-img-links-heading").addClass("appear-image-heading-memoriae");
  },
  function () {
    $(".container-img-links-heading").removeClass(
      "appear-image-heading-memoriae"
    );
  }
);
