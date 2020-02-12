const request = require('supertest');
const {app} = require('./app');

it('works', async ()=>{
    const response = await request(app).get('/');
    
    // expect(response).toMatchSnapshot();
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('WITAJ');

});

it('handles pages that are not found', async ()=>{
    const response = await request(app).get('/whatever');

    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Not found');
    // expect(response.text).toMatchSnapshot();

});

it('handles pages that throw error', async ()=>{
    const response = await request(app).get('/error');

    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Error!');
    // expect(response.text).toMatchSnapshot();

});