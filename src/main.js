'use strict';
if(window?.document) {
    const SimplyBuilderAttachFreeze = () => {
        if(typeof window.SimplyBuilderAttachShadow === "undefined") {
            const SimplyBuilderAttachShadowSymbol = window.Symbol("Simply Builder AttachShadow Freeze");
            const temporaryFrame = window.document.createElement("Frame");
            temporaryFrame.setAttribute('style', 'display:none!important');
            window.document.body.appendChild(temporaryFrame);
            const SimplyBuilderAttachShadowStore = {
                    [SimplyBuilderAttachShadowSymbol]: temporaryFrame.contentWindow.HTMLElement.prototype.attachShadow
            };
            window.Object.defineProperty(window, 'SimplyBuilderAttachShadow', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: {
                    name: 'SimplyBuilderModuleLibName',
                    version: 'SimplyBuilderModuleLibVersion'
                }
            });
            window.Object.freeze(window.SimplyBuilderAttachShadow);
            window.Object.defineProperty(window.Element.prototype, 'attachShadow', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: function () {
                    return SimplyBuilderAttachShadowStore[SimplyBuilderAttachShadowSymbol].apply(this, arguments);
                }
            });
            window.Object.freeze(window.Element.prototype.attachShadow);
            window.Object.defineProperty(window.HTMLElement.prototype, 'attachShadow', {
                enumerable: false,
                configurable: false,
                writable: false,
                value:  function () {
                    return SimplyBuilderAttachShadowStore[SimplyBuilderAttachShadowSymbol].apply(this, arguments);
                }
            });
            window.Object.freeze(window.HTMLElement.prototype.attachShadow);
        }
    };
    if(window.document.body) {
        SimplyBuilderAttachFreeze();
    } else document.addEventListener('DOMContentLoaded', SimplyBuilderAttachFreeze);
}