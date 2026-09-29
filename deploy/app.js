
    (function(){
      var menu=document.querySelector('.menu-btn');
      var links=document.getElementById('navLinks');
      menu.addEventListener('click',function(){var open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
      links.addEventListener('click',function(e){if(e.target.tagName==='A'){links.classList.remove('open');menu.setAttribute('aria-expanded','false');}});

      var form=document.getElementById('inquiryForm');
      var status=document.getElementById('copied');
      form.addEventListener('submit',function(e){
        e.preventDefault();
        var text='Erica Girls PG enquiry\n\nName: '+form.name.value+'\nPhone: '+form.phone.value+'\nRoom preference: '+form.roomType.value+'\nExpected move-in: '+(form.moveIn.value||'Not specified')+'\nMessage: '+(form.message.value||'—');
        function done(){status.classList.add('show');setTimeout(function(){status.classList.remove('show');},5000);}
        if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done).catch(function(){fallback(text);});}else{fallback(text);}
        function fallback(value){var area=document.createElement('textarea');area.value=value;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();document.execCommand('copy');document.body.removeChild(area);done();}
      });
    }());
  