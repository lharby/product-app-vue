<template>
    <div class="RetrieveProductData wrapper">
        <p class="alignC">
            Tablets
        </p>
        <section
            v-if="errored"
            class="error-message"
        >
            Sorry, there was an issue retreiving product data
        </section>
        <section v-else>
            <p
                v-if="loading"
                class="loading"
            >
                Loading ...
            </p>
            <ul
                v-else
                class="clearfix"
            >
                <li>
                    <ul class="el el-2 filters">
                        <li class="title">
                            Filters
                        </li>
                        <li><a href="#">Desktops</a></li>
                        <li>
                            <a
                                href="#"
                                class="active"
                            >
                                Tablets
                            </a>
                        </li>
                        <li><a href="#">Mobile phones</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </li>
                <li>
                    <ul class="el el-10">
                        <li v-if="remoteFail">
                            Some error
                        </li>
                        <li
                            v-for="items in products.catalogEntryView"
                            v-else
                            :key="items.uniqueID"
                            class="el el-3"
                        >
                            <a :href="items.resourceId">
                                <img
                                    :src="rootDir + items.thumbnail"
                                    :alt="items.name"
                                >
                            </a>
                            <a
                                class="product-name"
                                :href="items.resourceId"
                            >
                                {{ items.name }}
                            </a>
                            <p>
                                Retail price
                                <span class="currency-symbol">
                                    {{ items.price[0].currency | returnCurrencySymbol }}
                                </span>
                                {{ items.price[0].value }}
                            </p>
                            <p class="sale">
                                Sale price
                                <span class="currency-symbol">
                                    {{ items.price[1].currency | returnCurrencySymbol }}
                                </span>
                                {{ items.price[1].value }}
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';

    const testData = '../data/mockData.json';

    export default {
        name: 'RetrieveProductData',

        filters: {
            returnCurrencySymbol(value) {
                if (value === 'USD') {
                    return '$';
                } if (value === 'GBP') {
                    return '£';
                } if (value === 'YEN') {
                    return '¥';
                }
                return '';
            },
        },
        data() {
            return {
                products: null,
                loading: true,
                errored: false,
                remoteFail: false,
                rootDir: 'https://preview.commerceservicesdevops.ibmcloud.com',
                productCategory: '10023',
                productCatalogId: '10502',
                productCurrency: 'USD',
            };
        },
        mounted() {
            // retrieve remove data
            const getRemoteData = () => {
                axios
                    .get(
                        `https://www.demo.salmon-gcp.com/search/resources/store/1/productview/byCategory/${this.productCategory}?langId=-1&catalogId=${this.productCatalogId}&currency=${this.productCurrency}&responseFormat=json`
                    )
                    .then((response) => {
                        this.products = response.data;
                    }).catch(() => {
                        this.remoteFail = true;
                        getLocalData();
                    }).finally(() => {
                        this.loading = false;
                    });
            }
            // if remote fails load local data
            const getLocalData = () => {
                axios
                    .get(testData)
                    .then((response) => {
                        this.products = response.data;
                    }).catch(() => {
                        this.errored = true;
                    }).finally(() => {
                        this.loading = false;
                        this.remoteFail = false;
                    });
            }
            getRemoteData();
        },
    };
</script>
<style lang="scss">
    @import '../app/scss/main.scss';

    .filters {

        a {
            text-decoration: none;
        }
    }

    .RetrieveProductData {

        .sale {
            color: $orange;
        }

        a {
            display: block;

            &.product-name:hover {
                color: $green;
                text-decoration: none;
            }
        }
    }

    @include tablet($tablet-size) {

        .RetrieveProductData {

            img {
                width: 100%;
            }
        }
    }
</style>
