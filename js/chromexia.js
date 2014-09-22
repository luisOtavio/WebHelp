/**
* chromexia
* Source: 
*
* Copyright (c) 2013 Luis Otávio de Avelar
* Dual licensed under GPL and MIT licenses
**/

var chromexia = {
  status: false,
  
	options: {
		position: "top",
	},
 
  /**
    * Inicializa as configurações do plugin
    */
  initialize: function() {
    //this.style.initialize();
  },

  /**
    * Abre o editor
    */
  open: function() {
    this.widget.open();
    this.status = true;
  },
  
  /**
    * Reabre a janela do plugin
    */
  reopen: function() {
    this.widget.reopen();
  }, 

  /**
    * Fecha o editor
    */
  close: function() {
    chromexia.widget.close();
    //chromexia.status = false;
  }

};

















