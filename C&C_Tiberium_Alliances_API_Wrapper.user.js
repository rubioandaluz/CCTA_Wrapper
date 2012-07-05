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
              return this.LYXSZY ? this.LYXSZY : this.ZATNVD ? this.ZATNVD : this.ZEI ? this.ZEI : null
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
              return this.KWTOCI ? this.KWTOCI : this.OCYIKN ? this.OCYIKN : this.QIG ? this.QIG : null
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
              return this.KBUDOV ? this.KBUDOV : this.RBGTWS ? this.RBGTWS : this.KWG ? this.KWG : null
            } catch (e) {
              console.log("ClientLib.Data.CityEntity.prototype.get_UnitLevelRequirements: ", e);
              return null;
            }
          }
        }
        
        if(!ClientLib.Data.CityRepair.prototype.CanRepair) {
          ClientLib.Data.CityRepair.prototype.CanRepair = function(_iEntityID,_mode) {
            try {
              return this.VGWGGR ? this.VGWGGR(_iEntityID,_mode) : this.MZMQLL ? this.MZMQLL(_iEntityID,_mode) : this.TWI ? this.TWI(_iEntityID,_mode) : null
            } catch (e) {
              console.log("ClientLib.Data.CityRepair.prototype.CanRepair: ", e);
              return null;
            }
          }
        }
        
        if(!ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost) {
          ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost = function(_viewMode) {
            try {
              return this.MHTBYO ? this.MHTBYO(_viewMode) : this.VLDZIL ? this.VLDZIL(_viewMode) : this.IXI ? this.IXI(_viewMode) : null
            } catch (e) {
              console.log("ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost: ", e);
              return null;
            }
          }
        }
        
        if(!ClientLib.Data.City.prototype.getResourceLayout) {
          ClientLib.Data.City.prototype.getResourceLayout = function() {
            try {
              return this.JTKSIY ? this.JTKSIY : this.NCTWJE ? this.NCTWJE : this.KOI ? this.KOI : null
            } catch (e) {
              console.log("ClientLib.Data.City.prototype.getResourceLayout: ", e);
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