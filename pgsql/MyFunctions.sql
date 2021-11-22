
--drop extension if exists plpython3u cascade;
create extension if not exists plpython3u;





drop function if exists fnc_python_nodejs_base(module text, arguments text);

create or replace function fnc_python_nodejs_base(module text, arguments text default null) returns text as
$$

  from MyFunctions import py_node

  argumentsAux = str(arguments or '')
  
  #plpy.notice(module)
  #plpy.notice(arguments)
  #plpy.notice(argumentsAux)
  
  output = py_node(module, argumentsAux)
  
  return output

$$
language plpython3u;





drop function if exists fnc_python_nodejs(module text, arguments text);

create or replace function fnc_python_nodejs(module text, arguments text default null) returns jsonb as
$body$
declare
  vRetorno jsonb;
begin
  
  vRetorno := fnc_python_nodejs_base(module, arguments);

  if vRetorno ? 'data' then
    return vRetorno->'data';
  else
    raise exception '%', vRetorno->'error';
  end if;

end
$body$
language 'plpgsql';

/* 

select
  fnc_python_nodejs(
    'httpClient',
    jsonb_build_object(
        'method', 'get',
        'url', 'https://brasilapi.com.br/api/cep/v2/14770000'
      )::text
  );
  
*/
