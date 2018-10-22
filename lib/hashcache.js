import { isArray } from "util";

let GLOBAL_CACHE = {}
let getCacheKeyString=(itemKey, categoryHierarchy) =>{
    if (isArray(categoryHierarchy) && categoryHierarchy.length >0)
        return `${categoryHierarchy.join('~')}~${itemKey}`
    return itemKey
}
let getCollectionKey = (categoryHierarchy) => {
    if (isArray(categoryHierarchy) && categoryHierarchy.length >0)
        return categoryHierarchy.join('~')
    
    return ""
}
const HashCache = 
    {
        init: (opts) => {
                GLOBAL_CACHE_INDEX = {

                }
                GLOBAL_CACHE= {
                    Status:{
                        persist: opts.persist,
                        total_writes: 0,
                        total_reads: 0,
                        cached_item_count: 0,
                        collection_count
                    },
                    DB:
                    {
                    }
            }
        },
        getStatus: 
            () => {
                return GLOBAL_CACHE.Status
            },
        getItem:
            (key, category_hierarchy=Array()) => {
                let cachekey = getCacheKeyString(key, category_hierarchy)
                GLOBAL_CACHE.Status.total_reads++
                return GLOBAL_CACHE.db[cacheKey]
            },
        getCollection:
            (category_hierarchy=Array()) => {
                let cachekey = getCollectionKey(category_hierarcy)
                GLOBAL_CACHE.Status.total_reads++
                return GLOBAL_CACHE.db[cacheKey]
            },
        addItem: 
            (key, 
            value, 
            category_hierarchy=Array(),
            optionalExpirationTime=null) => 
            {
                let cachekey = getCacheKeyString(key, category_hierarchy)
                GLOBAL_CACHE.db[cacheKey]=value
                GLOBAL_CACHE.Status.cached_item_count++
                GLOBAL_CACHE.Status.total_writes++

                if (isArray(category_hierarchy) && category_hierarchy.length >0) {
                    GLOBAL_CACHE.Status.total_writes++

                    let collection = getCollectionKey(category_hierarchy)
                    if (!isArray(GLOBAL_CACHE_INDEX[collection])) {
                        GLOBAL_CACHE_INDEX[collection] = Array();
                        GLOBAL_CACHE.Status.collection_count++

                    }
                    if (isArray(value))
                        GLOBAL_CACHE_INDEX[collection] = GLOBAL_CACHE_INDEX[collection].concat(value)
                    else
                        GLOBAL_CACHE_INDEX[collection].push(value)
                }

            }   
    }
export default HashCache;

