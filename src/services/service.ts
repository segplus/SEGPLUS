import { request } from 'umi';

//加载数据
export function loaddatelist() {
  return request(
    'https://cloud.seatable.cn/dtable-server/api/v1/dtables/eb5c8d7362bb4deab95f700a7278a810/rows/?table_name=投标区域',
    {
      headers: {
        Authorization:
          'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDcyMTU0NzgsImR0YWJsZV91dWlkIjoiZWI1YzhkNzM2MmJiNGRlYWI5NWY3MDBhNzI3OGE4MTAiLCJ1c2VybmFtZSI6IiIsInBlcm1pc3Npb24iOiJydyIsImFwcF9uYW1lIjoic2hpeXUifQ.7IHpdCfBJ-FhxZath4TLtxRJxN2QVS4fwsAVgA8Hz8w',
      },
    },
  );
}
//加载数据
export function loaddatelist01() {
  return request(
    'https://cloud.seatable.cn/dtable-server/api/v1/dtables/eb5c8d7362bb4deab95f700a7278a810/rows/?table_name=投标项目金额',
    {
      headers: {
        Authorization:
          'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDcyMTU0NzgsImR0YWJsZV91dWlkIjoiZWI1YzhkNzM2MmJiNGRlYWI5NWY3MDBhNzI3OGE4MTAiLCJ1c2VybmFtZSI6IiIsInBlcm1pc3Npb24iOiJydyIsImFwcF9uYW1lIjoic2hpeXUifQ.7IHpdCfBJ-FhxZath4TLtxRJxN2QVS4fwsAVgA8Hz8w',
      },
    },
  );
}
//加载数据
export function loaddatelist02() {
  return request(
    'https://cloud.seatable.cn/dtable-server/api/v1/dtables/eb5c8d7362bb4deab95f700a7278a810/rows/?table_name=中标信息2',
    {
      headers: {
        Authorization:
          'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDcyMTU0NzgsImR0YWJsZV91dWlkIjoiZWI1YzhkNzM2MmJiNGRlYWI5NWY3MDBhNzI3OGE4MTAiLCJ1c2VybmFtZSI6IiIsInBlcm1pc3Npb24iOiJydyIsImFwcF9uYW1lIjoic2hpeXUifQ.7IHpdCfBJ-FhxZath4TLtxRJxN2QVS4fwsAVgA8Hz8w',
      },
    },
  );
}
export function loaddatelist03() {
  return request(
    'https://cloud.seatable.cn/dtable-server/api/v1/dtables/eb5c8d7362bb4deab95f700a7278a810/rows/?table_name=中标信息2',
    {
      headers: {
        Authorization:
          'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDcyMTU0NzgsImR0YWJsZV91dWlkIjoiZWI1YzhkNzM2MmJiNGRlYWI5NWY3MDBhNzI3OGE4MTAiLCJ1c2VybmFtZSI6IiIsInBlcm1pc3Npb24iOiJydyIsImFwcF9uYW1lIjoic2hpeXUifQ.7IHpdCfBJ-FhxZath4TLtxRJxN2QVS4fwsAVgA8Hz8w',
      },
    },
  );
}
//加载数据2
export function loaddatelist1() {
  return request('http://jsonplaceholder.typicode.com/users', {});
}
//新增数据
export function saveOne(data: any) {
  return request('http://jsonplaceholder.typicode.com/users', {
    method: 'post',
    data,
  });
}
//修改数据
export function updateOne(id: number, data: any) {
  return request('http://jsonplaceholder.typicode.com/users', {
    method: 'put',
    data,
  });
}
//删除数据
export function delOne(id: number) {
  return request('http://jsonplaceholder.typicode.com/users', {
    method: 'delete',
  });
}
