// ==UserScript==
// @name           C&C Tiberium Alliances Wrapper
// @description    Creating prototypes that EA missed in their API
// @namespace      https://prodgame*.alliances.commandandconquer.com/*/index.aspx* 
// @include        https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version        0.9b5
// @author         mmaelstrom and PythEch
// ==/UserScript==
(function() {
  var CCTAWrapper_main = function() {
      try {
        function createCCTAWrapper() {
          console.log('CCTAWrapper loaded');

          /*****************************************************/
          /** Creating prototypes that EA missed in their API **/
          /*****************************************************/

          if (typeof System == 'undefined') {
            try {
              System = $I; //Might not work
            } catch (e) {
              console.log("System: ", e);
            }
          }
          // TEST PLEASE //
          if (!System.CbtSetup) {
            System.CbtSetup = function() {
              try {
                return this.XTJTVV ? this.XTJTVV : this.YUEBQC ? this.YUEBQC : this.PML ? this.PML : null
              } catch (e) {
                console.log("System: ", e);
              }
            }
          }
          if (!System.CbtSimulation) {
            System.CbtSimulation = function() {
              try {
                return this.PRFSNB ? this.PRFSNB : this.FBJZWE ? this.FBJZWE : this.QOL ? this.QOL : null
              } catch (e) {
                console.log("System: ", e);
              }
            }
          }
          // TEST PLEASE //
          if (!System.EventHandler) {
            System.EventHandler = function() {
              try {
                return this.GRHRBP ? this.GRHRBP : this.WMJHOK ? this.WMJHOK : this.QQL ? this.QQL : null
              } catch (e) {
                console.log("System.EventHandler: ", e);
                return null;
              }
            }
          }
          if (!System.EventHandler.prototype.$ctor) {
            System.EventHandler.prototype.$ctor = function() {
              try {
                return this.TNQEHB ? this.TNQEHB : this.GEDTYY ? this.GEDTYY : this.HGL ? this.HGL : null
              } catch (e) {
                console.log("System.EventHandler.$ctor: ", e);
                return null;
              }
            }
          }
          if (!ClientLib.Res.ResMain.prototype.get_Gamedata) {
            ClientLib.Res.ResMain.prototype.get_Gamedata = function() {
              // m_Gamedata
              try {
                return this.NUMTUV ? this.NUMTUV : this.IYHFVG ? this.IYHFVG : this.YEJ ? this.YEJ : null
              } catch (e) {
                console.log("ClientLib.Res.ResMain.prototype.get_Gamedata: ", e);
                return null;
              }
            }
          }
          if (!ClientLib.Data.CityUnits.prototype.get_FullRawRepairTimeForUnitGroupTypes) {
            ClientLib.Data.CityUnits.prototype.get_FullRawRepairTimeForUnitGroupTypes = function() {
              // m_FullRawRepairTimeForUnitGroupTypes
              try {
                return this.RAECNA ? this.RAECNA : this.NBLSAX ? this.NBLSAX : this.ZHG ? this.ZHG : null
              } catch (e) {
                console.log("ClientLib.Res.ResMain.prototype.get_FullRawRepairTimeForUnitGroupTypes: ", e);
                return null;
              }
            }
          }
          // TEST //
          if (!System.CbtSetup.prototype.get_Entities) {
            System.CbtSetup.prototype.get_Entities = function() {
              // m_Entities
              try {
                return this.UNMZDH ? this.UNMZDH : this.RMCABE ? this.RMCABE : this.OAG ? this.OAG : null
              } catch (e) {
                console.log("System.CbtSetup.prototype.get_Entities: ", e);
                return null;
              }
            }
          }
          // TEST //
          if (!ClientLib.Vis.Battleground.BattlegroundEntity.prototype.get_Entity) {
            ClientLib.Vis.Battleground.BattlegroundEntity.prototype.get_Entity = function() {
              // m_Entity
              try {
                return this.DPSDGN ? this.DPSDGN : this.HLUBJW ? this.HLUBJW : this.UBK ? this.UBK : null
              } catch (e) {
                console.log("ClientLib.Vis.Battleground.BattlegroundEntity.prototype.get_Entity: ", e);
                return null;
              }
            }
          }
          if (!ClientLib.Vis.Battleground.BattlegroundEntity.prototype.get_UnitType) {
            ClientLib.Vis.Battleground.BattlegroundEntity.prototype.get_UnitType = function() {
              // m_UnitType
              try {
                return this.LLEHXS ? this.LLEHXS : this.CMCLEW ? this.CMCLEW : this.TAK ? this.TAK : null
              } catch (e) {
                console.log("ClientLib.Vis.Battleground.BattlegroundEntity.prototype.get_UnitType: ", e);
                return null;
              }
            }
          }
          if (!ClientLib.Data.CityBuildings.prototype.get_Buildings) {
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

          if (!ClientLib.Data.CityUnits.prototype.get_DefenseUnits) {
            ClientLib.Data.CityUnits.prototype.get_DefenseUnits = function() {
              // m_DefenseUnits
              try {
                return this.KWTOCI ? this.KWTOCI : this.OCYIKN ? this.OCYIKN : this.QIG ? this.QIG : null
              } catch (e) {
                console.log("ClientLib.Data.CityUnits.prototype.get_DefenseUnits: ", e);
                return null;
              }
            }
          }

          if (!ClientLib.Data.CityEntity.prototype.get_UnitLevelRequirements) {
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

          if (!ClientLib.Data.CityRepair.prototype.CanRepair) {
            ClientLib.Data.CityRepair.prototype.CanRepair = function(_iEntityID, _mode) {
              try {
                return this.VGWGGR ? this.VGWGGR(_iEntityID, _mode) : this.MZMQLL ? this.MZMQLL(_iEntityID, _mode) : this.TWI ? this.TWI(_iEntityID, _mode) : null
              } catch (e) {
                console.log("ClientLib.Data.CityRepair.prototype.CanRepair: ", e);
                return null;
              }
            }
          }

          if (!ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost) {
            ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost = function(_viewMode) {
              try {
                return this.MHTBYO ? this.MHTBYO(_viewMode) : this.VLDZIL ? this.VLDZIL(_viewMode) : this.IXI ? this.IXI(_viewMode) : null
              } catch (e) {
                console.log("ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost: ", e);
                return null;
              }
            }
          }

          if (!ClientLib.Data.City.prototype.getResourceLayout) {
            ClientLib.Data.City.prototype.getResourceLayout = function() {
              try {
                return this.JTKSIY ? this.JTKSIY : this.NCTWJE ? this.NCTWJE : this.KOI ? this.KOI : null
              } catch (e) {
                console.log("ClientLib.Data.City.prototype.getResourceLayout: ", e);
                return null;
              }
            }
          }

          if (!ClientLib.Vis.Battleground.Battleground.prototype.getSimulation) {
            ClientLib.Vis.Battleground.Battleground.prototype.getSimulation = function() {
              // m_Simulation
              try {
                return this.EGIABS ? this.EGIABS : this.HXGRQD ? this.HXGRQD : this.MAG ? this.MAG : null
              } catch (e) {
                console.log("ClientLib.Vis.Battleground.Battleground.prototype.getSimulation: ", e);
                return null;
              }
            }
          }
          // TEST //
          if (!System.CbtSimulation.prototype.DoStep) {
            System.CbtSimulation.prototype.DoStep = function(_dryRun) {
              // m_Simulation
              try {
                return this.HGWHBL ? this.HGWHBL(_dryRun) : this.ICPGRO ? this.ICPGRO(_dryRun) : this.DPL ? this.DPL(_dryRun) : null
              } catch (e) {
                console.log("System.CbtSimulation.prototype.DoStep: ", e);
                return null;
              }
            }
          }
          // TEST //
          if (!ClientLib.Data.CityPreArmyUnits.prototype.UpdateArmyLayout) {
            ClientLib.Data.CityPreArmyUnits.prototype.UpdateArmyLayout = function() {
              // UpdateArmyLayout$0
              try {
                return this.AXPSSY ? this.AXPSSY() : this.TNEWNF ? this.TNEWNF() : this.DJG ? this.DJG() : null
              } catch (e) {
                console.log("ClientLib.Data.CityPreArmyUnits.prototype.UpdateArmyLayout: ", e);
                return null;
              }
            }
          }

          if (!ClientLib.Data.CityPreArmyUnits.prototype.RefreshData) {
            ClientLib.Data.CityPreArmyUnits.prototype.RefreshData = function() {
              // RefreshData$0
              try {
                return this.ZDELLG ? this.ZDELLG() : this.AOMXAS ? this.AOMXAS() : this.BJG ? this.BJG() : null
              } catch (e) {
                console.log("ClientLib.Data.CityPreArmyUnits.prototype.RefreshData: ", e);
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

  try {
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
