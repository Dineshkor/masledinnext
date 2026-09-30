import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = fs.readFileSync('src/data/productData.ts', 'utf8');
const js = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const context = { exports: {} };
vm.runInNewContext(js, context);
const { products, categories } = context.exports;
const byId = Object.fromEntries(products.map((product) => [product.id, product]));
const specs = (id) => Object.fromEntries(byId[id].specs.map(({ label, value }) => [label, value]));

test('catalogue product set and category links are complete', () => {
  assert.equal(products.length, 12);
  assert.equal(new Set(products.map((product) => product.id)).size, products.length);
  assert.equal(byId.cob, undefined);
  assert.ok(byId['rx-outdoor']);
  assert.ok(byId['signage-kiosk']);
  assert.ok(categories.some((category) => category.slug === 'digital-signage'));
  for (const product of products) {
    assert.ok(categories.some((category) => category.slug === product.categorySlug), product.id);
  }
});

test('indoor catalogue pitches and brightness replace invented site figures', () => {
  assert.equal(byId.bendex.name, 'MAS-BendX Series');
  assert.equal(specs('bendex')['Pixel Pitch'], 'P1.53 / P1.86 / P2.5 / P3.07');
  assert.equal(specs('hd-pro')['Pixel Pitch'], 'P1.25 / P1.53 / P1.86 / P2.5');
  assert.equal(specs('infinity')['Pixel Pitch'], 'P2.5 / P3.07 / P4');
});

test('outdoor, rental, transparent and standee claims match catalogue tables', () => {
  assert.equal(specs('ox')['Brightness'], '>4,500–6,000 nits (by pitch)');
  assert.equal(specs('storm')['IP Rating'], 'IP65');
  assert.equal(specs('rx-indoor')['Cabinet Weight'], 'Approx. 6.8 kg');
  assert.equal(specs('eventsmax')['Cabinet Size'], '576 × 576 mm');
  assert.equal(specs('transglow')['Brightness'], '3,500–4,500 nits');
  assert.equal(specs('standpro')['Pixel Pitch'], 'P1.53 / P1.86 / P2.5');
  assert.equal(specs('signage-kiosk')['Display Type'], 'Full HD LCD signage kiosk');
});
