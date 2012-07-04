// ==UserScript==
// @name        C&C Tiberium Alliances API Wrapper
// @namespace   CCTAWrapper
// @description Supplies some wrapper functions for public use
// @include     http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version     1
// ==/UserScript==

(function (){
  var CCTAWrapper_main = function() {
    try {
      function createCCTAWrapper() {
        console.log('CCTAWrapper loaded');
       
        /*****************************************************/
        /** Creating prototypes that EA missed in their API **/
        /*****************************************************/
        if(!ClientLib.Data.CityBuildings.prototype.get_Buildings) {
          ClientLib.Data.CityBuildings.prototype.get_Buildings = function() {
            // m_Buildings , GetFullRepairTime
            try {
              if(this.LYXSZY) {
                return this.LYXSZY;
              }
              if(this.ZATNVD) {
                return this.ZATNVD;
              }
              if(this.ZEI) {
                return this.ZEI;
              }
              
              return null; 
            } catch (e) {
              console.log("ClientLib.Data.CityBuildings.prototype.get_Buildings: ", e);
              return null; 
            }
          }
        }
        
        if(!ClientLib.Data.CityUnits.prototype.get_DefenseUnits) {
          ClientLib.Data.CityUnits.prototype.get_DefenseUnits = function () {
            // m_DefenseUnits
            try {
              if(this.KWTOCI) {
                return this.KWTOCI;
              }
              if(this.OCYIKN) {
                return this.OCYIKN; 
              }
              if(this.QIG) {
                return this.QIG; 
              }
              
              return null; 
            } catch (e) {
              console.log("ClientLib.Data.CityUnits.prototype.get_DefenseUnits: ", e);
              return null; 
            }
          }
        }
        
        if(!ClientLib.Data.CityEntity.prototype.get_UnitLevelRequirements) {
          ClientLib.Data.CityEntity.prototype.get_UnitLevelRequirements = function() {
            // m_UnitLevelRequirements.rer
            try {
              if(this.KBUDOV) {
                return this.KBUDOV; 
              }
              if(this.RBGTWS) {
                return this.RBGTWS; 
              }
              if(this.KWG) {
                return this.KWG; 
              }
              
              return null; 
            } catch (e) {
              console.log("ClientLib.Data.CityEntity.prototype.get_UnitLevelRequirements: ", e);
              return null; 
            }
          }
        }
        
        if(!ClientLib.Data.CityRepair.prototype.CanRepair) {
          ClientLib.Data.CityRepair.prototype.CanRepair = function(_iEntityID,_mode) {
            try {
              if(this.VGWGGR) {
                return this.VGWGGR(_iEntityID,_mode); 
              }
              if(this.MZMQLL) {
                return this.MZMQLL(_iEntityID,_mode); 
              }
              if(this.TWI) {
                return this.TWI(_iEntityID,_mode); 
              }
              
              return null; 
            } catch (e) {
              console.log("ClientLib.Data.CityRepair.prototype.CanRepair: ", e);
              return null; 
            }
          }
        }
        
        if(!ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost) {
          ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost = function(_viewMode) {
            try {
              if(this.MHTBYO) {
                return this.MHTBYO(_viewMode);
              }
              if(this.VLDZIL) {
                return this.VLDZIL(_viewMode);
              }
              if(this.IXI) {
                return this.IXI(_viewMode);
              }  
              return null; 
            } catch (e) {
              console.log("ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost: ", e);
              return null; 
            }
          }
        }
      }
    } catch (e) {
      console.log("createCCTAWrapper: ", e);
    }
    
    function CCTAWrapper_checkIfLoaded() {
      try {
        if (typeof qx != 'undefined') {
          createCCTAWrapper();
        } else {
          window.setTimeout(CCTAWrapper_checkIfLoaded, 1000);
        }
      } catch (e) {
        console.log("CCTAWrapper_checkIfLoaded: ", e);
      }
    }
    
    if (/commandandconquer\.com/i.test(document.domain)) {
      window.setTimeout(CCTAWrapper_checkIfLoaded, 1000);
    }
  }

  try
  {
    var CCTAWrapper = document.createElement("script");
    CCTAWrapper.innerHTML = "var CCTAWrapper_IsInstalled = true; (" + CCTAWrapper_main.toString() + ")();";
    CCTAWrapper.type = "text/javascript";
    if (/commandandconquer\.com/i.test(document.domain)) {
      document.getElementsByTagName("head")[0].appendChild(CCTAWrapper);
    }
  } catch (e) {
    console.log("CCTAWrapper: init error: ", e);
  }
})();