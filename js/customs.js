$(document).ready(function(){
   
    $('#riwayatInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="riwayat"][value="ada"]').prop('checked', true);
    }
  });

    $('#komplikasiInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="komplikasi"][value="ada"]').prop('checked', true);
    }
  });

    $('#alergiInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="alergi"][value="ada"]').prop('checked', true);
    }
  });

   $('#penyakitInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="penyakit"][value="ada"]').prop('checked', true);
    }
  });

    $('#pkeluargaInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="pkeluarga"][value="ada"]').prop('checked', true);
    }
  });

    $('#alergiInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="alergi"][value="ada"]').prop('checked', true);
    }
  });

  $(document).ready(function(){
    $("button[data-input]").click(function(){
      var buttonValue = $(this).data("input");
      var currentTextAreaValue = $("#inputSedasi").val();
      var newTextAreaValue = currentTextAreaValue + buttonValue + "\n";
      $("#inputSedasi").val(newTextAreaValue);
    });
  });

  $(document).ready(function(){
    $("button[data-input]").click(function(){
      var buttonValue = $(this).data("input");
      var currentTextAreaValue = $("#inputPosisi").val();
      var newTextAreaValue = currentTextAreaValue + buttonValue + "\n";
      $("#inputPosisi").val(newTextAreaValue);
    });
  });


  });

