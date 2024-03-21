'use strict';

const {describe, it} = require("node:test");
const {equal} = require("node:assert");
const pkg = require("../package.json");
const {JSDOM} = require("jsdom");

const dom = new JSDOM(`<!DOCTYPE html><html lang="en"><head><title>test</title></head><body></body></html>`);
global['window'] = dom.window;
global['document'] = dom.window.document;
global['HTMLElement'] = dom.window.HTMLElement;
global['Element'] = dom.window.Element;
global['SVGElement'] = dom.window.SVGElement;

require('..');

describe("JavaScript IIFE test", () => {
    it("SimplyBuilderAttachShadow test", async () => {
        equal(typeof window.SimplyBuilderAttachShadow, "object");
        equal(window.SimplyBuilderAttachShadow.name, "SimplyBuilderAttachShadow");
        equal(window.SimplyBuilderAttachShadow.version, pkg.version);
        global['SimplyBuilderAttachShadow'] = window.SimplyBuilderAttachShadow;
        equal(Object.isExtensible(SimplyBuilderAttachShadow), false);
        equal(Object.isExtensible(Element.prototype.attachShadow), false);
        equal(Object.isExtensible(HTMLElement.prototype.attachShadow), false);
    });
});