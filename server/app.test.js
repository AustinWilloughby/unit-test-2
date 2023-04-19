const app = require('./app.js');

test('server starts up correctly', () => {
    expect(app).toBeDefined();
});

afterAll(() => {
    app.close();
});